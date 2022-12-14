import React from 'react'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import OcCon from 'react-native-vector-icons/Octicons'

MIcon.loadFont()

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
}

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 15,
  medium: 25,
  large: 30,
  extraLarge: 40,
  ultraLarge: 70
}

export const MaterialIcon = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
)

export const OcticonsIcon = ({size, name, color}: IconProps) => (
  <OcCon name={name} size={IconSizes[size]} color={color} />
)