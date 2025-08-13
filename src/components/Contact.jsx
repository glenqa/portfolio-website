import { Mail } from "lucide-react";
import { Download } from "lucide-react";

const Contact = () => {
  return (
    <div className="pb-4">
      <h2 className="my-10 text-center text-4xl font-bold">Get In Touch</h2>

      <div className="flex justify-center mt-4">
        <a
          href="/GlendaTay_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full p-4 text-sm text-stone-800 mb-6 flex items-center gap-2"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      <div className="flex justify-center">
        <a
          href="mailto:glendataywx@gmail.com"
          className="flex items-center gap-2 text-white text-sm hover:underline"
        >
          <Mail size={16} /> glendataywx@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
