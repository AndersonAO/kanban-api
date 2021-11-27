interface ICreateKanban {
  userId: string;
}

interface IFindByUserIdKanban {
  userId: string;
}

interface IFindByIdKanban {
  id: string;
}

interface IDeleteKanban {
  userId: string;
  kanbanId: string;
}

export { ICreateKanban, IFindByUserIdKanban, IDeleteKanban, IFindByIdKanban };
