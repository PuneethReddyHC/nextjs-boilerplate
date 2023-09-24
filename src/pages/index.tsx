import PostsList from '@/components/posts/PostsList';
import { Base } from '../templates/base';
import { Meta } from '@/layout/Meta';

const Index = () => {
  return (
    <>
      <Meta title="Lorem ipsum" description="Lorem ipsum" />
      <PostsList />
    </>
  )
};

export default Index;