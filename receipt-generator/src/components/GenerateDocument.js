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
        <Text style={{ fontSize: 13 , textAlign: 'right', paddingBottom: '5%', paddingRight: '7%'}}> Receipt 1</Text>
        {/* <Text style={"text-align: right;padding-right: 10%;"> Receipt 1 </p>
        <p>Received sum of INR ₹23 from SK towards the rent of property located at SS for the period Jan 2022</p> 
        <p style="padding-top: 2%;"><b>Signature</b> <br/><br/> SS <b>(Landlord)</b> <br/><br/> DDDD <b>(PAN Number)</b></p> */}
      </View>
    </Page>
  </Document>
);

export default GenerateDocument;