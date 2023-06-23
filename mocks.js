import { rest } from 'msw';


// handlers
export const handlers = [
  rest.get('https://api.example.com/cards', (req, res, ctx) => {
    // Mock response for getTodos
    const mockData = [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
      { id: 3, title: 'Todo 3' },
    ];
    return res(ctx.json(mockData));
  }),

  rest.get('https://api.example.com/cards:id', (req, res, ctx) => {
    // Mock response for getTodos
    const mockData = [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
      { id: 3, title: 'Todo 3' },
    ];
    const {id}= req.params;
    const getCardById = mockData.find(card=>card.id === id);
    return res(ctx.json(getCardById));
  }),


  rest.post('https://api.example.com/cards', (req, res, ctx) => {
    // Mock response for createCard
    const newTodo = req.body;
    const createCard = { id: 4, ...newTodo };
    return res(ctx.json(createCard));
  }),

  rest.put('https://api.example.com/cards/:id', (req, res, ctx) => {
    // Mock response for updateCard
    const { id } = req.params;
    const updatedCard = { id, ...req.body };
    return res(ctx.json(updatedCard));
  }),

  rest.delete('https://api.example.com/cards/:id', (req, res, ctx) => {
    // Mock response for deleteCard
    const { id } = req.params;
    return res(ctx.json({ id }));
  })
];

// Start the mock server
beforeAll(() => server.listen());

// Clean up after the tests are done
afterAll(() => server.close());

// Example test case for getTodos
test('getTodos should return mock data', async () => {
  const todos = await getListCards();
  expect(todos).toEqual([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' },
  ]);
});

// Example test case for createTodo
test('createTodo should return the created todo', async () => {
  const newTodo = { title: 'New Todo' };
  const createdTodo = await createTodo(newTodo);
  expect(createdTodo).toEqual({ id: 4, title: 'New Todo' });
});

test('return the cards by Id', async () => {
    const id = 1;
    const getCardById = { title: 'Get cards' };
    const response = await getCardById(id, getCardById);
    expect(response).toEqual({ id: 1, title: 'Get cards' });
  });
// Example test case for updateTodo
test('updateTodo should return the updated todo', async () => {
  const id = 1;
  const updatedTodo = { title: 'Updated Todo' };
  const response = await updateTodo(id, updatedTodo);
  expect(response).toEqual({ id: 1, title: 'Updated Todo' });
});

// Example test case for deleteTodo
test('deleteTodo should return the deleted todo id', async () => {
  const id = 1;
  const response = await deleteTodo(id);
  expect(response).toEqual({ id: 1 });
});