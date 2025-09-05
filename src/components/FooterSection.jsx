import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router";

const styles = {
  h4: "text-2xl font-semibold",
  p: "text-lg",
  link: "text-lg pl-1 hover:underline tracking-normal",
  icon: "h-[1.5rem] w-[1.5rem]",
};
function FooterSection() {
  return (
    <footer className="bg-lime-600/50 px-4 py-10 tracking-wider text-green-950 lg:px-8 lg:py-20">
      <div className="flex w-full flex-col justify-between gap-3 lg:flex-row lg:gap-0">
        <div className="space-y-3.5">
          <img className="w-[6rem]" src="/logos/logo.webp" alt="company-logo" />
          <h4 className={styles.h4}>Aditi Essentials Pvt. Ltd.</h4>
          <p className={styles.p}>
            212, Hubtown Solaris, 2nd Floor, Andheri (E)
            <br />
            Mumbai-400069.
            <br />
            Customer Care: +91 9320412495,
          </p>
        </div>
        <div>
          <h4 className={styles.h4}>Quick Links</h4>
          <ul>
            <li>
              <Link className={styles.link} to={"#"}>
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"#"}>
                Refund Policy
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"#"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"#"}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"#"}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"#"}>
                Find Us In-Store
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1 lg:space-y-4">
          <h4 className={styles.h4}>Let's Connect</h4>
          <div className="flex items-center gap-4 lg:justify-between lg:gap-0">
            <Link to={"#"}>
              <AiOutlineWhatsApp className={styles.icon} />
            </Link>
            <Link to={"#"}>
              <AiOutlineFacebook className={styles.icon} />
            </Link>
            <Link to={"#"}>
              <AiOutlineTwitter className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className="space-y-0 lg:space-y-2">
          <h4 className={styles.h4}>Subscribe</h4>
          <p className="text-xl">Subscribe for store updates and discounts.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-10">
        <p>© 2025, Avoca</p>
        <p>
          Designed by{" "}
          <span>
            <Link
              target="blank"
              to={"https://www.instagram.com/studiofable.in/"}
            >
              Studio Fable{" "}
            </Link>
          </span>
          | Developed by{" "}
          <span className="text-2xl font-semibold hover:underline">
            <Link target="blank" to={"https://www.instagram.com/not.imu/"}>
              Imu
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
