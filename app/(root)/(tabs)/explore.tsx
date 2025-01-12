import { Card, FeaturedCard } from "@/components/Card";
import Fiters from "@/components/Fiters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link, router } from "expo-router";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView className="bg-white h-full">


      <FlatList data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className=" flex flex-row items-center justify-between mt-5">
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row bg-primary-100 rounded-full size-11 items-center justify-center">
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-base font-rubik-medium text-black-300">
                Search  for Your Dream Home
              </Text>
              <Image source={icons.bell} className="size-5" />
            </View>
            <Search />
            <View className="mt-5">
              <Fiters />
              <Text className="text-xl font-rubik-bold text-black-300 mt-5">
                Found 8 Properties
              </Text>
            </View>
          </View>
        }
      />





      {/* </ScrollView> */}

    </SafeAreaView>
  );
}
