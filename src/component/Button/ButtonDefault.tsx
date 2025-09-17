import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Text,
} from 'react-native';

const ButtonDefault = ({
  title,
  onPress,
  style,
  textStyle,
  leftIcons,
  rightIcons,
}: {
  title: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  leftIcons: React.ReactNode;
  rightIcons: React.ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {leftIcons && leftIcons}
      <Text style={textStyle}>{title}</Text>
      {rightIcons && rightIcons}
    </TouchableOpacity>
  );
};

export default ButtonDefault;
