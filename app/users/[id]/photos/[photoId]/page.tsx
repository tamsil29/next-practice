import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoPage = ({ params: { id, photoId } }: Props) => {
  return <div>user {id} photo {photoId}</div>;
};

export default UserPhotoPage;
