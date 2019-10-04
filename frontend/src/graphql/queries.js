/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    title
    isLive
    queue
    currentSong {
      title
      url
    }
  }
}
`;
export const listChannels = `query ListChannels(
  $filter: TableChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      isLive
      queue
    }
    nextToken
  }
}
`;
