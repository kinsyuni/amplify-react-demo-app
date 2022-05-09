/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="303px"
      height="282px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,229,229,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame1")}
    >
      <View
        width="185px"
        height="60px"
        position="absolute"
        top="70px"
        left="68px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
      ></View>
      <View
        width="199px"
        height="68px"
        position="absolute"
        top="73px"
        left="54px"
        overflow="hidden"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 4")}
      ></View>
      <Flex
        gap="10px"
        position="absolute"
        bottom="37px"
        left="calc(50% - 77px - 0.5px)"
        direction="row"
        width="154px"
        height="47px"
        alignItems="flex-start"
        overflow="hidden"
        borderRadius="50px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(124,121,121,0.38)"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,12,6,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="136px"
          height="27px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="送信"
          {...getOverrideProps(overrides, "\u9001\u4FE1")}
        ></Text>
      </Flex>
    </View>
  );
}
