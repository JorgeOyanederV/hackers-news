import { FC } from "react";
import { useLocation } from "react-router-dom";

interface NewPostPageProps {}

const NewPostPage: FC<NewPostPageProps> = () => {
  const { state } = useLocation();
  const { author, story_title, created_at, comment_text } = state.new;
  const date = new Date(created_at);
  return (
    <div className="w-full container px-[150px] mx-auto py-[20px]">
      <div className="w-full text-2xl text-gray-800 leading-normal">
        {/* <!--Title--> */}
        <div className="font-sans">
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-6xl md:text-4xl">
            {story_title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Published on <br />
            {date.getDay()} / {date.getMonth()} / {date.getFullYear()}
          </p>
          <p className="text-sm md:text-base font-normal text-gray-600 capitalize">
            Author: <br />
            {author}
          </p>
        </div>

        <p className="py-3 text-justify">{comment_text}</p>
        <p className="py-3 text-justify">
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
          purus, in mattis tortor sollicitudin pretium. Phasellus at diam
          posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
          pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
          condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
          turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
          rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
          molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
          molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
          risus. Nunc nec luctus nisi. className aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Duis nec
          nulla eget sem dictum elementum.
        </p>

        <ol>
          <li className="py-3 text-justify">
            Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
            lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
            venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo
            sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
            scelerisque tortor semper posuere.
          </li>
          <li className="py-3 text-justify">
            Morbi varius posuere blandit. Praesent gravida bibendum neque eget
            commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
            Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
            odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
            hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec
            felis.
          </li>
          <li className="py-3 text-justify">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
            tristique in risus ac, tristique rutrum velit. Mauris accumsan
            tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam
            ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit,
            elementum odio et, consequat tellus.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NewPostPage;
