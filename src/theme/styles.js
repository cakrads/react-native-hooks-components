import {COLORS} from './index';

const global = {
  fontSize: 16,
  italic: {fontStyle: 'italic'},
  fontNormal: {fontFamily: 'OpenSans'},
  bold: {fontFamily: 'OpenSans-Bold'},
  semiBold: {fontFamily: 'OpenSans-SemiBold'},
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
};

const title = {
  // title
  H1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 23,
    // textTransform: 'uppercase',
    textTransform: 'capitalize',
    color: COLORS.text,
    maxWidth: '95%',
    paddingVertical: 10,
  },
  H2: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    // textTransform: 'uppercase',
    textTransform: 'capitalize',
    color: COLORS.text,
    maxWidth: '95%',
    paddingVertical: 10,
  },
  H3: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: COLORS.text,
    maxWidth: '95%',
    // textTransform: 'uppercase',
    textTransform: 'capitalize',
    paddingVertical: 10,
  },
  H4: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    // textTransform: 'capitalize',
    color: COLORS.text,
    maxWidth: '95%',
  },
};

const additional = {
  borderRadius: 8,
};

const shadow = {
  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowBold: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
};

export default {
  ...global,
  ...title,
  ...additional,
  ...shadow,
};
