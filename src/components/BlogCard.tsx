import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => (
  <Link href={`/blog/${post.slug}`}>
    <div className="bg-custom-blue-500 p-2 pb-5 flex flex-col items-center">
      <div className="relative w-full h-40">
        <Image src={post.image} layout="fill" objectFit="cover" />
      </div>

      <h2 className="p-2 w-full text-center md:text-left">{post.title}</h2>
      <p className="p-2 text-center md:text-left font-light">{post.excerpt}</p>
      <Button
        text="Read more"
        href={`/posts/${post.slug}`}
        type="tertiary"
        className="m-2"
      />
    </div>
  </Link>
);

export default BlogCard;
