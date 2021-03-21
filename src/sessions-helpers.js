export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => {
    return folder.id === folderId;
  });

export const findSession = (sessions = [], sessionId) =>
  sessions.find((session) => session.id + "" === sessionId);

export const getSessionsForFolder = (sessions = [], folderId) =>
  !folderId
    ? sessions
    : sessions.filter((session) => session.folder_id === folderId);

export const countSessionsForFolder = (sessions = [], folderId) =>
  sessions.filter((session) => session.folder_id === folderId).length;
