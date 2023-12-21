
const HomePageModel = {
  selectedId: null,
  getData: () => ({
    title: 'Our projects',
  }),
  showGame: () => HomePageModel.selectedId,

  setId: (id) => {
    HomePageModel.selectedId = id;
  },

  getId: () => {
    return HomePageModel.selectedId;
  },
}

export { HomePageModel }