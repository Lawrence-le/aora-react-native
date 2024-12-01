import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  View,
  RefreshControl,
} from "react-native";

import { images } from "../../constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";
import { getAllPosts, getLatestPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";

// import useAppwrite from "../../lib/useAppwrite";
// import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
// import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

interface Item {
  $id: string;
  id: number;
  video: string;
  title: string;
  thumbnail: string;
  creator: {
    username: string;
    avatar: string;
  };
}

// interface Video {
//   title: string;
//   thumbnail: string;
//   video: string;
//   creator: {
//     username: string;
//     avatar: string;
//   };
// }

const Home: React.FC = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: posts, refetch } = useAppwrite(getAllPosts) as Item[];

  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }: ListRenderItemInfo<Item>) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6 ">
            <View className="flex justify-between items-start flex-row mb-6 ">
              <View>
                <Text className="font-normal text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-semibold text-white ">
                  JSMastery
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  // className="w-9 h-10"
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 ">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={latestPosts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
