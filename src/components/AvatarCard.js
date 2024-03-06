import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AvatarCard = ({ avatar, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.avatarContainer, isSelected && styles.selectedAvatar]}
      onPress={onPress}
    >
      <LinearGradient
        colors={avatar.linearGradientColors}
        style={styles.linearGradientAvatarContainer}
      >
        <Image
          source={avatar.avatarUrl}
          style={styles.avatarImage}
          resizeMode="contain"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  linearGradientAvatarContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '90%',
    height: '90%',
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: '#FFAB40',
  },
});

export default AvatarCard;
