import data from "../data.json";

export const initialState = {
  data: data,
  sidebar: data.portfolio.sidebar,
  content: data.portfolio.content,
};

const reducer = (state, action) => {
  switch (action.type) {
    // case "UPDATE_CONTENT_ARRAY":
    //   return {
    //     ...state,
    //     contentArray: action.contentArray,
    //     xml: action.xml,
    //     editXml: action.xml,
    //   };

    // case "UPDATE_TRANSLATION":
    //   // update translation text
    //   let newContentArray = state.contentArray;
    //   newContentArray[action.id].translationText = action.text;

    //   let newXml = state.xml;

    //   for (var i in newContentArray) {
    //     if (i !== 0 && newContentArray[i].translationText) {
    //       newXml = newXml
    //         .toLowerCase()
    //         .replace(
    //           newContentArray[i].originalText.toLowerCase(),
    //           newContentArray[i].translationText
    //         );
    //     }
    //   }

    //   return {
    //     ...state,
    //     contentArray: newContentArray,
    //     editXml: newXml,
    //   };

    default:
      return state;
  }
};

export default reducer;
