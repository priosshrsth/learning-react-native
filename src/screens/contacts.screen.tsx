import { Image, PermissionsAndroid, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Contacts, { type Contact } from 'react-native-contacts';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactCard from 'components/ContactCard';

const getContacts = async (): Promise<Contact[]> => {
  const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
  if (permission === 'granted') {
    return await Contacts.getAll().catch((e) => {
      console.error(3);
      return [];
    });
  }

  return [];
};
export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts().then((contacts) => setContacts(contacts));
  }, []);

  return (
    <>
      <ScrollView className={'flex-1'}>
        <View className={'container items-center justify-center flex-4 align-center flex flex-row flex-wrap pb-[66]'}>
          {contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.recordID} />
          ))}
        </View>
      </ScrollView>
      <Pressable style={styles.addNewContactBtn} onPress={() => Contacts.openContactForm({})}>
        <Icon accessibilityLabel={'Add New Contact'} name={'plus-circle-outline'} color={'rebeccapurple'} size={64} />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  addNewContactBtn: {
    backgroundColor: '#fc454e',
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
