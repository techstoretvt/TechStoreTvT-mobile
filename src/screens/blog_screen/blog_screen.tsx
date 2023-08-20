/* eslint-disable prettier/prettier */
import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';

import styles from './blog_screen_styles';
import { getListBlogForyou } from '../../services/api';

const ContentImageBlog = ({ imgs }: { imgs: any }) => {
  return (
    <View style={styles.BlogScreen_content_wrapImage}>
      {imgs?.map((item: any, index: number) => (
        <Image key={item.id + index} source={{ uri: item.image }} style={styles.BlogScreen_content_wrapImage_img} />
      ))}
    </View>
  );
};

const ContentImageBlogProduct = ({ imgs }: { imgs: any }) => {
  return (
    <View style={styles.BlogScreen_content_wrapImage}>
      {imgs?.map((item: any, index: number) => (
        <Image
          key={item.id + index}
          source={{ uri: item.imagebase6 }}
          style={styles.BlogScreen_content_wrapImage_img}
        />
      ))}
    </View>
  );
};

const BlogCard = ({ data }: { data: any }) => {
  if (data === null) {
    return (
      <View style={styles.BlogScreen_wrapBlog}>
        <Text>Bài viết được chia sẽ đã bị xóa</Text>
      </View>
    );
  }
  const getAvatar = () => {
    let image = 'https://source.unsplash.com/random?sig=1';
    if (!data) {
      return image;
    }
    if (data.User?.avatarUpdate !== null) {
      return data.User?.avatarUpdate || image;
    }

    if (data.User?.typeAccount === 'github') {
      return data.User?.avatarGithub || image;
    }

    if (data.User?.typeAccount === 'google') {
      return data.User?.avatarGoogle || image;
    }

    if (data.User?.typeAccount === 'facebook') {
      return data.User?.avatarFacebook || image;
    }
    return image;
  };

  return (
    <View style={styles.BlogScreen_wrapBlog}>
      <View style={styles.BlogScreen_header}>
        <Image source={{ uri: getAvatar() }} style={styles.BlogScreen_header_avt} />
        <Text style={styles.BlogScreen_header_name}>{data?.User?.firstName + ' ' + data?.User?.lastName}</Text>
      </View>
      <View style={styles.BlogScreen_wrapText}>
        <Text style={styles.BlogScreen_wrapText_text}>{data?.title !== null && data?.title}</Text>
      </View>
      <View style={styles.BlogScreen_content}>
        {data && data.typeBlog === 'default' && <ContentImageBlog imgs={data?.imageBlogs} />}
        {data && data.typeBlog === 'shareBlog' && (
          <BlogCard data={data['blogs-blogShares-parent']['blogs-blogShares-child']} />
        )}
        {data && data.typeBlog === 'product' && (
          <ContentImageBlogProduct imgs={data['blogs-blogShares-parent']?.product['imageProduct-product']} />
        )}
      </View>
    </View>
  );
};

const BlogScreen = () => {
  const [listBlog, setListBlog] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleGetListBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetListBlog = async () => {
    setLoading(true);
    let res = await getListBlogForyou({
      page: !listBlog ? 1 : Math.floor(10 / listBlog.length) + 1,
      maxCount: 10,
    });
    if (res?.errCode === 0) {
      setLoading(false);
      if (!listBlog) {
        setListBlog(res.data);
      } else {
        let newArr = [...listBlog, ...res.data];
        setListBlog(newArr);
      }
    }
  };

  const getMoreBlog = () => {
    console.log('get more');
    handleGetListBlog();
  };

  return (
    <>
      <FlatList
        data={listBlog}
        keyExtractor={(item, index) => index + item.id}
        renderItem={({ item }) => <BlogCard key={item.id} data={item} />}
        onEndReached={getMoreBlog}
      />
      {loading && <Text>Đang tải</Text>}
    </>
  );
};

export default BlogScreen;
