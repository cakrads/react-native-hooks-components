import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  ScrollView,
  RefreshControl,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {getGlobalList, genreByID} from './../store/actions/movie';
import {COLORS} from './../theme';
import {
  Container,
  LoadingActivity,
  ListsCardV3,
  Header,
  Content,
} from './../components';

const ListMovieScreen = props => {
  // console.log("ListMovieScreen", props.navigation.getParam('data'))
  const navData = props.navigation.getParam('data');

  const dispatch = useDispatch();
  const movieData = useSelector(state => state.movieReducer);
  const deviceHeight = Dimensions.get('window').height;
  const [isLoadingPull, setIsLoadingPull] = useState(true);
  const [isLoadingScrolled, setIsLoadingScrolled] = useState(false);
  const [title, setTitle] = useState(true);

  useEffect(() => {
    getData(true);
  }, []);

  const initData = type => {
    let title =
      type == 'inTheater'
        ? 'Now Showing'
        : type == 'popular'
        ? 'Popular'
        : navData.genreID
        ? dispatch(genreByID(navData.genreID))
        : '-';
    setTitle(title);
  };

  const getData = async firstInit => {
    let type = navData.listType;
    let params = {type: type};
    if (type == 'genre') params.with_genres = navData.genreID;

    if (firstInit) initData(type);

    try {
      await dispatch(getGlobalList(firstInit, params));
      setIsLoadingScrolled(false);
      setIsLoadingPull(false);
    } catch (error) {
      setIsLoadingPull(false);
      setIsLoadingScrolled(false);
      // console.log('Error', error);
      // Alert.alert(error.message);
    }
  };

  // ACTION
  const goToDetail = param => {
    console.log('goToDetail', param);
    props.navigation.navigate('DetailMovieScreen', {data: {id: param}});
  };

  const pullToRequest = () => {
    setIsLoadingPull(true);
    getData(true);
  };

  const getMoreData = nativeEvent => {
    if (isCloseToBottom(nativeEvent)) {
      if (isLoadingScrolled) return;
      setIsLoadingScrolled(true);
      getData(false);
    }
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50
    );
  };

  return (
    <Container>
      <Header padder backButton>
        {title}
      </Header>
      <ListsCardV3
        data={movieData.globalList.list}
        clickAction={goToDetail}
        refreshControl={
          <RefreshControl
            refreshing={isLoadingPull}
            onRefresh={() => pullToRequest(true)}
            tintColor={COLORS.danger}
            colors={[COLORS.primary]}
          />
        }
        ListFooterComponent={() => {
          if (!isLoadingPull) return <LoadingActivity />;
          return null;
        }}
        onEndReached={() => getData(false)}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </Container>
  );
};

export default withNavigation(ListMovieScreen);
