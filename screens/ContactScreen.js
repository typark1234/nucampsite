import { ScrollView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';


const ContactScreen = () => {

    return (
        <ScrollView>
          <Card wrapperStyle={{ margin: 10 }}>
                <Card.Title>
                   Contact Information
                </Card.Title>
                <Card.Divider/>
                <Text style={{ marginBottom: 20 }}>
                      1 Nucamp Way
                      Seattle, WA 98001
                      U.S.A.</Text>
                <Text>
                      Phone: 1-206-555-1234
                </Text>
                <Text>
                      Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>
    );

};

export default ContactScreen;