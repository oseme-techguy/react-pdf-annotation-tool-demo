export default function() {
  return [
    {
      title: "Dashboard",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "",
    },
    {
      title: "Upload Document",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/upload-document",
    },
    {
      title: "Spacy Named Entities",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/manage-named-entities",
    },
    {
      title: "Manager Users",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/manage-users",
    }
  ];
}
