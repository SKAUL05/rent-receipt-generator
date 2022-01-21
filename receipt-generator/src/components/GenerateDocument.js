import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import GenerateTable from './GenerateTable';

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
    borderWidth: 1
  }
});



// Create Document Component
const GenerateDocument = props => {  
  return(
  <Document>
    <Page size="A4" style={styles.page} >
      <GenerateTable table={props} />
    </Page>
  </Document>
  )};

export default GenerateDocument;