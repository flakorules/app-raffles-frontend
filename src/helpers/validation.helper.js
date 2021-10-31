export const formatValidationMessages = (messages = []) => {
  const messagesHtml = messages.reduce(
    (acc, cur) =>
      `${acc}<li class='text-left text-danger font-weight-bold'>${cur}</li>`,
    ""
  );
  return `<ul>${messagesHtml}</ul>`;
};

export const formatValidationMessagesFromApi = (messages = {}) => {
  const messagesHtml = Object.keys(messages).reduce((acc, curr) => {
    return `${acc}<li class='text-left text-danger font-weight-bold'>${messages[curr].msg}</li>`;
  }, "");
  return `<ul>${messagesHtml}</ul>`;
};
