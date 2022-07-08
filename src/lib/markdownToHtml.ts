import { remark } from "remark";
import html from "remark-html";

/* Markdownを解析してHTMLにして返す */

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export default markdownToHtml;
