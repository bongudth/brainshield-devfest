import React from 'react'
import { Card, Avatar } from 'antd'
import { HeartOutlined, CommentOutlined, MoreOutlined } from '@ant-design/icons'

const ExploreProducts = () => {
  const { Meta } = Card

  return (
    <div style={{ margin: "2rem 8rem", display: "flex", flexWrap: "wrap" }}>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ margin: "0.4rem" }}
        cover={
          <img
            alt="example"
            src="https://picsum.photos/300/250"
          />
        }
        actions={[
          <HeartOutlined key="heart" />,
          <CommentOutlined key="comment" />,
          <MoreOutlined key="more" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  )
}

export default ExploreProducts
