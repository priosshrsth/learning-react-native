import type { Contact } from 'react-native-contacts';
import { Dimensions, Image, Text, View } from 'react-native';
import { Avatar } from 'src/assets';
import { useEffect, useState } from 'react';

type IProps = {
  contact: Contact;
};

const windowDimensions = Dimensions.get('window');

const gridPerRow = 3;

export default function ContactCard({ contact }: IProps) {
  // const [dimensions, setDimensions] = useState(windowDimensions);
  //
  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', ({ window }) => {
  //     setDimensions(window);
  //   });
  //   return () => subscription?.remove();
  // });

  return (
    <View key={contact.recordID} className={'block overflow-hidden relative w-[120] py-4 px-1'}>
      <Image className={'h-[120] w-full'} source={contact.thumbnailPath ? { uri: contact.thumbnailPath } : Avatar} />
      <Text className={'text-center'}>{contact.displayName}</Text>
    </View>
  );
}
