import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderStyle: 'solid',
    borderWidth: 1
  }
});

// Create Document Component
const GenerateDocument = props => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 15 }}>RENT RECEIPT</Text>
        <Text style={{ fontSize: 13 , paddingTop: 5}}>Jan 2022</Text>
        <Text style={{ fontSize: 13 , textAlign: 'right', paddingBottom: '10%', paddingRight: '7%'}}> Receipt 1</Text>
        <Text style={{ fontSize: 12 , paddingTop: '25%'}}>Received sum of INR ₹23 from SK towards the rent of property located at SS for the period Jan 2022</Text>
        <Text style={{ fontSize: 13 , paddingTop: '35%'}} >Signature</Text>
        <Text style={{ fontSize: 13 , paddingTop: 5}}>SKAUL05 (Landlord)</Text>
        <Text style={{ fontSize: 13 , paddingTop: 5}}>SKAUL05 (PAN Number)</Text>
      </View>
    </Page>
  </Document>
);

export default GenerateDocument;