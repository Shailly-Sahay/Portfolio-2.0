import PageLink from "../../components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <>
      <section className="section-pd !py-12 bg-black">
        <div className="flex flex-row justify-between">
          <Logo />
          <div className="flex gap-8 md:gap-16">
            <PageLink
              href="https://www.linkedin.com/in/shailly-sahay/"
              newPage={true}
              customClass="flex items-center"
            >
              <FontAwesomeIcon
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                icon={faEnvelope}
              />
            </PageLink>

            <PageLink
              href="https://github.com/Shailly-Sahay"
              newPage={true}
              customClass="flex items-center"
            >
              <FontAwesomeIcon
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                icon={faGithub}
              />
            </PageLink>

            <PageLink
              href="https://www.linkedin.com/in/shailly-sahay/"
              newPage={true}
              customClass="flex items-center"
            >
              <FontAwesomeIcon
                className="h-6 w-6 md:h-8 md:w-8 text-white"
                icon={faLinkedin}
              />
            </PageLink>
          </div>

          <div className="flex items-center">
            <p className="text-[#fff9] body-font">© Shailly Sahay</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
