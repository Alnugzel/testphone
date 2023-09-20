import React from "react";
import "./styles/body.css";
import { BiCheck, BiSolidStar } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineLock } from "react-icons/ai";



const Body = () => {
  return (
    <article className="article">
      <header className="article__header">
        <h1 className="article__title">Wait! Your Order In Progress.</h1>
        <p className="article__description">
          Lorem Ipsum Dolor Sit Amet, Consectetur
        </p>
      </header>

      <section className="article__status">
        <div>
          <span>
            <BiCheck />
          </span>{" "}
          <p>Cart Review</p>
        </div>
        <div>
          <span>
            <BiCheck />
          </span>{" "}
          <p>Checkout</p>
        </div>
        <div>
          <span>3</span> <p>Special Offer</p>
        </div>
        <div>
          <span>4</span> <p>Confirmation</p>
        </div>
      </section>

      <section className="offer">
        <h1>
          <span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For
          Only <span>$14 Each</span> ($84.00 Total!)
        </h1>

        <div className="product">
        <img src="./product.png" alt="Clarifion" />
      </div>

      </section>

     
      <section className="reviews">
        <div className="reviews__info">
          <div className="reviews__info-img">
            <img src="./airionizer.png" alt="" />
          </div>
          <div className="reviews__info-data">
            <div className="reviews__info-title">
              <p>Clarifion Air Ionizer</p>
              <p>
                <span>$180</span>
                <span>$84</span>
              </p>
            </div>
            <div className="reviews__calification">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
            </div>
            <div className="stock">
              <div>
                <div className="circle"></div>
              </div>
              <p>12 left in Stock</p>
            </div>
          </div>
        </div>
        <div className="reviews__comment">
          <p>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </section>

      <section className="features">
        <div>
          <div>
            <BiCheck />
          </div>
          <p>
            Negative Ion Technology may <span>help with allergerns</span>
          </p>
        </div>
        <div>
          <div>
            <BiCheck />
          </div>
          <p>
           Designed for<span>air rejuvenation</span>
          </p>
        </div>
        <div>
          <div>
            <BiCheck />
          </div>

          <p>
            <span>Perfect for every room</span> in all types of places
          </p>
        </div>
      </section>


        <section className="percent">
            
            <div className="percent__body">
                <div className="percent__circle"><span>%</span></div>
                <div className="percent__info">
                    <p>
                        Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.
                    </p>
                </div>
            </div>
        </section>

        <section className="cashout">
            <div className="cashout__button">
                <button>
                    <p>YES - CLAIM MY DISCOUNT</p> <AiOutlineArrowRight/>
                </button>
            </div>

    <div className="cashout__info">
        <div className="cashout__info-shipping">

        <div><p>Free Shipping</p></div> <p>|</p>
        <div><p><AiOutlineLock/> Secure 256-Bit SSL Encryption</p></div>
        </div>
        <div className="cashout__separator"></div>
        <div className="cashout__payments">
            <div><img src="./vector/visa.png" alt="" /></div>
            <div><img src="./vector/pay.png" alt="" /></div>
            <div><img src="./vector/paypal.png" alt="" /></div>
            <div><img src="./vector/mastercard.png" alt="" /></div>
            <div><img src="./vector/googlepay.png" alt="" /></div>
            <div><img src="./vector/apple.png" alt="" /></div>
            <div><img src="./vector/amex.png" alt="" /></div>
        </div>

        <div className="cashout__cancel">
            <p>
                NO THANKS, I DON'T WANT THIS.
            </p>
        </div>
    </div>

        </section>


<section className="guarantee">
    <div className="guarantee__img">
        <img src="./guarantee.png" alt="" />
    </div>

    <p className="guarantee__text">
        If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the botton of the page for more details. Happy Shopping!
    </p>

</section>

    </article>
  );
};

export default Body;
