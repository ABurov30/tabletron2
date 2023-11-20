export const columns = [
  {
    formatter: 'rowSelection',
    titleFormatter: 'rowSelection',
    titleFormatterParams: {
      rowRange: 'active',
    },
    hozAlign: 'center',
    resizable: true,
  },
  { title: 'Номер', field: 'number', hozAlign: 'center', resizable: true },
  {
    title: 'Таблица',
    field: 'table',
    hozAlign: 'center',
    resizable: true,
  },
  {
    title: 'Наличие фич',
    field: 'features',
    editor: 'input',
    hozAlign: 'center',
    resizable: true,
  },
  {
    title: 'Легкость расширения',
    field: 'easeOfExpansion',
    editor: 'input',
    hozAlign: 'center',
    resizable: true,
  },
  {
    title: 'Легкость интеграции',
    field: 'easeOfIntegration',
    editor: 'input',
    hozAlign: 'center',
    resizable: true,
  },
];
