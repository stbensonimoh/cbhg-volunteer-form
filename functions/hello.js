const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      welcomeMessage: "Hello there!",
    }),
  };
}

export {handler}