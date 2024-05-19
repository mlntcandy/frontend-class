import {
  StyleSheet,
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface IPdfDocumentProps {
  name: string;
  picture?: FileList;
}

export const PdfDocument: React.FC<IPdfDocumentProps> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>

        <View style={styles.section}>
          {picture && picture.length > 0 && <Image source={picture[0]} />}
        </View>
      </Page>
    </Document>
  );
};
