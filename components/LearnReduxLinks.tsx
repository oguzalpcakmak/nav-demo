/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

"use strict";

import { Fragment } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
// @ts-ignore

const Colors = {
  primary: "#1292B4",
  white: "#FFF",
  lighter: "#F3F3F3",
  light: "#DAE1E7",
  dark: "#444",
  darker: "#222",
  black: "#000",
};

const links = [
  {
    title: "React",
    link: "https://reactjs.org/",
    description: "JavaScript library for building user interfaces",
  },
  {
    title: "Redux",
    link: "https://redux.js.org/",
    description: "A Predictable State Container for JS Apps",
  },
  {
    title: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
    description:
      "The official, opinionated, batteries-included toolset for efficient Redux development",
  },
  {
    title: "React Redux",
    link: "https://react-redux.js.org",
    description: "Official React bindings for Redux",
  },
];

export default function LinkList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {links.map((item, index) => {
          return (
            <Fragment key={index}>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole={"button"}
                onPress={() => Linking.openURL(item.link)}
                style={styles.linkContainer}
              >
                <Text style={styles.link}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: "400",
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});
