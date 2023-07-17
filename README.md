<h1>
File Key Extractor 
</h1>

File Key Extractor is a plugin to extract information from Figma URLs without having to do it manually. Specifically, it parses the URLs and retrieves the File Key and Node ID, allowing users to directly access specific elements and files in their Figma projects with LLMs using LangChain.

<h2>
How to Use
</h2>

Copy the Figma URL that you want to parse. The URL can be obtained from the browser or by clicking on the "Share" button and then selecting the "Copy Link" option.



The link should be to a file in Figma or Figjam and must come from 'figma.com'.

It would look something like: <b>"https://www.figma.com/file/some_file_key/somename?type=design&node-id=some_node_id&mode=design&t=MvsdfdfnacmVx-1". </b>



However, the plugin will also accept URLs without the 'https://' or 'www'.



Paste the copied URL into the input field in the plugin and click on the "Parse URL" button. The plugin will then parse the URL and display the 'File Key' and 'Node ID' in separate input fields.



Click the corresponding copy button next to each field to copy the values to your clipboard.


<b>
Note: Each time a new URL is parsed, the previous messages will disappear. If the URL entered is not from 'figma.com', an error message will be displayed.
</b>


This tool is a quick and efficient way to extract critical identifiers from your Figma URLs, saving time and reducing the potential for errors.