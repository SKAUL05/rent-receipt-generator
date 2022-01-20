import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    maxHeight: '35%'
  }
});

// Create Document Component
const GenerateDocument = props => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 14 }}>RENT RECEIPT</Text>
        <Text style={{ fontSize: 13 , paddingTop: 5}}>Jan 2022</Text>
        <Text style={{ fontSize: 13 , textAlign: 'right', paddingBottom: '10%', paddingRight: '7%'}}> Receipt 1</Text>
        <Text style={{ fontSize: 12 , paddingTop: '2%'}}>Received sum of INR {props.rent} from {props.name} towards the rent of property located at {props.address} for the period Jan 2022</Text>
        <Text style={{ fontSize: 13 , paddingTop: '10%'}} >Signature</Text>
        <Text style={{ fontSize: 13 , paddingTop: 8}}>{props.owner} (Landlord)</Text>
        <Text style={{ fontSize: 13 , paddingTop: 8}}>{props.pan} (PAN Number)</Text>
      </View>
    </Page>
  </Document>
);

export default GenerateDocument;