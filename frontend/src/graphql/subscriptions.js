/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = `subscription OnCreateChannel(
  $id: ID
  $title: String
  $isLive: Boolean
  $queue: [String]
  $currentSong: CreateSongInput
) {
  onCreateChannel(
    id: $id
    title: $title
    isLive: $isLive
    queue: $queue
    currentSong: $currentSong
  ) {
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
export const onUpdateChannel = `subscription OnUpdateChannel(
  $id: ID
  $title: String
  $isLive: Boolean
  $queue: [String]
  $currentSong: UpdateSongInput
) {
  onUpdateChannel(
    id: $id
    title: $title
    isLive: $isLive
    queue: $queue
    currentSong: $currentSong
  ) {
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
export const onDeleteChannel = `subscription OnDeleteChannel(
  $id: ID
  $title: String
  $isLive: Boolean
  $queue: [String]
  $currentSong: DeleteSongInput
) {
  onDeleteChannel(
    id: $id
    title: $title
    isLive: $isLive
    queue: $queue
    currentSong: $currentSong
  ) {
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
