const initialState = {
  projectFilter: "web",
  modalProjectBool: false,
  project: {},
};

// la fonction reducer englobe toute les actions de l'appli
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_PROJECT":
      return {
        ...state,
        projectFilter: action.projectDev,
      }; // Au moment de la maj du state on ne change que ce qu'on utilise/ou besoin dans l'action

    case "OPEN_MODAL_PROJECT_BOOL":
      return {
        ...state,
        modalProjectBool: true,
        project: action.project,
      };

    case "CLOSE_MODAL_PROJECT_BOOL":
      return {
        ...state,
        modalProjectBool: false,
        project: {},
      };

    default:
      return state;
  }
}

export default reducer;
