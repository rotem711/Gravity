interface NavTree {
  page: {
    id: string
    url: string
    title: string
  }
  depth
  children: NavTree
}

export default interface NavInterface {
  tree: NavTree[]
}
