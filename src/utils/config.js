const version = "0.70_beta";
const contact = {
  email: "me@zzzsy.top",
  wx_id: "zsyyy_8",
  qq: "2273231189",
};
const pages = {
  index: "/pages/index/index",
  profile: "/pages/profile/profile",
  about: "/pages/profile/about/about",
  login: "/pages/profile/login/login",
  collection: "/pages/collection/collection",
  editEntry: "/pages/editEntry/editEntry",
  previewEdit: "/pages/editEntry/previewEdit/previewEdit",
  entryDetail: "/pages/entryDetail/entryDetail",
  searchEntry: "/pages/searchEntry/searchEntry",
  myEdit: "/pages/myEdit/myEdit",
  addEntry: "/pages/addEntry/addEntry",
  updateEntry: "/pages/updateEntry/updateEntry",
  questions: "/pages/entryDetail/questions"
};
const errors = {
  no_entry: "Entry matching query does not exist.",
  no_questions: "substring not found"
}

const apis = {
  entry : {
    add: '/entry/addentry',
    edit: '/entry/editentry',
    detail: '/entry/entrydetail',
    myedit: '/entry/myedit',
    search: '/entry/entrysearch',
    update: '/entry/updateentry',
    getquestion: '/entry/getQuestion',
  },
  collection: {
    sync: '/collection/sync',
    submit: '/collection/submit',
    del: '/collection/delentry',
    add: '/collection/addentry',
  },
  login: {
    login: '/login/login'
  }
}

export { pages, version, contact, errors, apis };
