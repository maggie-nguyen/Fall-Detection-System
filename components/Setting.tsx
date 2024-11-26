import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface SettingsProps {
  onNavigateBack: () => void;
}

interface Contact {
  name: string;
  phone: string;
}

const Setting: React.FC<SettingsProps> = ({ onNavigateBack }) => {
  const [contacts, setContacts] = useState<Contact[]>([
    { name: "Daughter", phone: "010-1234-5678" },
    { name: "Emergency", phone: "119" },
  ]);

  const [newContact, setNewContact] = useState<Contact>({ name: "", phone: "" });
  const [addingContact, setAddingContact] = useState(false);

  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    setContacts((prev) => [...prev, newContact]);
    setNewContact({ name: "", phone: "" });
    setAddingContact(false);
  };

  const handleDeleteContact = (index: number) => {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={16} color={Colors.darkgrey} />
      </TouchableOpacity>

      <Image
        source={require("../assets/images/Avatar.png")}
        style={styles.avatar}
      />
      <Text style={styles.name}>Kim Nupjuk</Text>

      <View style={styles.infoCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Kim Nupjuk</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Date of birth</Text>
          <Text style={styles.value}>1944/01/01</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>Male</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Emergency Contact</Text>
        {contacts.map((contact, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.label}>{contact.name}</Text>
              <Text style={styles.value}>{contact.phone}</Text>
              <TouchableOpacity onPress={() => handleDeleteContact(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
            {index < contacts.length - 1 && <View style={styles.divider} />}
          </View>
        ))}

        {addingContact && (
          <View style={styles.addContactContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contact Name"
              value={newContact.name}
              onChangeText={(text) => setNewContact({ ...newContact, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={newContact.phone}
              onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
            />
            <View style={styles.row}>
              <TouchableOpacity style={styles.saveButton} onPress={handleAddContact}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setAddingContact(false);
                  setNewContact({ name: "", phone: "" });
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {!addingContact && (
          <TouchableOpacity onPress={() => setAddingContact(true)}>
            <View style={styles.divider} />
            <Text style={styles.addContact}>Add a new contact...</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.exportCard}>
        <Text style={styles.exportData}>Export All Health Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutCard}>
        <Text style={styles.logout}>Log out</Text>
      </TouchableOpacity>`
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.lightgrey,
    padding: 20,
  },
  backButton: {
    marginBottom: 80,
  },
  backArrow: {
    fontSize: 18,
    color: Colors.black,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 70,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: Colors.black,
  },
  value: {
    fontSize: 14,
    color: Colors.darkgrey,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.mediumgrey,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  addContact: {
    fontSize: 14,
    color: Colors.blue,
    marginTop: 10,
  },
  addContactContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: Colors.pink,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  saveButtonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: Colors.darkgrey,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  cancelButtonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  deleteButton: {
    fontSize: 12,
    color: Colors.pink,
    marginLeft: 10,
  },
  exportData: {
    fontSize: 14,
    color: Colors.pink,
    textAlign: "left", 
    padding: 15, 
  },
  logout: {
    fontSize: 14,
    color: Colors.pink,
    textAlign: "center", 
  },
  exportCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 15, 
  },
});

export default Setting;
