/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChannel = `mutation CreateChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
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
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
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
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
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
