import React, { useState } from "react";

import Card from "./Card";

function Post({ post }) {
  const [currentImage, setCurrentImage] = useState(0);
  if (!post.published) {
    return null; // Non mostrare l'articolo se non è pubblicato
  }

  return (
    <Card
      title={post.title}
      content={post.content}
      image={post.image || "https://picsum.photos/400/200"}
      tags={post.tags}
      published={post.published}
    />
  );
}

export default Post;
