import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function StoryPage() {
  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div className="matter-head">
          <h2> Our Story</h2>
        </div>
        <div className="matter-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            augue ipsum, lacinia sed ex sed, sodales elementum sem. Fusce id
            vulputate eros, sit amet tincidunt nunc. Nunc risus arcu, semper nec
            gravida nec, pharetra tempus purus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris pellentesque dolor vel quam
            consectetur, at facilisis erat consectetur. Pellentesque auctor
            ligula a lorem convallis, et pellentesque ligula ullamcorper. Fusce
            a luctus lorem.
          </p>
          <p>
            Suspendisse iaculis metus facilisis venenatis ultricies. Etiam
            lobortis vehicula ex et feugiat. Nam luctus a velit in ullamcorper.
            Ut vitae pretium eros, at aliquam nisi. Aenean augue ipsum, semper
            eu arcu non, elementum feugiat sapien. Donec consequat lacus varius
            pellentesque vestibulum. Nunc efficitur orci eros, nec semper libero
            aliquet in. Nulla laoreet convallis dictum. Sed in elit vitae dui
            condimentum pulvinar.
          </p>

          <p>
            Curabitur auctor, turpis rutrum aliquam malesuada, neque orci cursus
            erat, posuere bibendum ligula eros id dolor. Proin aliquam tempus
            turpis a porta. Proin ultricies eu dui eget viverra. Praesent mattis
            semper massa ac rutrum. Nullam feugiat ante ex, ac gravida nisi
            consectetur ac. Mauris et venenatis ex. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam faucibus dictum libero, vitae elementum ipsum sodales at. In
            nec massa velit. Nam condimentum dignissim justo, eu semper enim
            auctor ac. Phasellus eget augue vel est pharetra vestibulum. Nam non
            mollis orci, sed semper ex. Integer hendrerit vel nulla et pharetra.
          </p>
          <p>
            Fusce in sollicitudin est, in lacinia dolor. Sed id scelerisque
            quam. Donec quam neque, venenatis sed velit in, suscipit tempor
            purus. Maecenas quis orci leo. Aliquam dolor turpis, euismod eu
            placerat quis, eleifend vel dui. Proin erat augue, semper tempus
            gravida sit amet, dictum vitae arcu. Sed fringilla turpis ligula,
            eget ultrices augue facilisis a. In hac habitasse platea dictumst.
            Curabitur ac porta augue, a interdum orci. Etiam non sollicitudin
            mi. Nulla vitae scelerisque diam. Morbi vehicula dictum ex nec
            lacinia. Phasellus vulputate nisl sed ex tempor, id lobortis dolor
            semper. Praesent eleifend, nibh sit amet consequat vehicula, neque
            velit sagittis quam, et sollicitudin turpis odio vitae lacus. Etiam
            condimentum, nunc vitae facilisis auctor, enim lorem vestibulum
            nulla, eu vulputate felis mi eget purus. Ut a sapien ut leo
            pellentesque malesuada a et sem.
          </p>
          <p>
            Duis pretium, elit sed suscipit eleifend, elit magna tempor nibh,
            nec fringilla dolor erat sit amet nibh. Ut ac feugiat sapien.
            Pellentesque laoreet vitae diam eget congue. Sed facilisis dui vitae
            sem aliquet, vel placerat tellus gravida. Praesent eleifend
            tincidunt tortor ut laoreet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam pulvinar auctor ante, non pharetra tortor
            tempus in. Nunc sit amet erat quis erat hendrerit pellentesque. In
            luctus erat sit amet dolor imperdiet tristique. Ut ac lorem vitae
            quam pretium venenatis quis vitae purus. Maecenas et orci nisl.
            Mauris fringilla eros ut erat varius tempus. Aenean in ullamcorper
            lorem, blandit scelerisque ex. Quisque a lectus enim. Nulla
            elementum tellus dui, nec viverra felis maximus et. Quisque eros
            tortor, aliquet quis feugiat ac, gravida nec sem.
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default StoryPage;
