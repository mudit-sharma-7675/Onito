export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "TABLE_ADD_LIST": {
      return {
        ...state,
        tableList: [...state.tableList, action.payload],
      };
    }
  }
  return state;
};
export const initialValue = {
  tableList: [],
};
