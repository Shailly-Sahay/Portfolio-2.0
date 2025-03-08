import Button from "../../components/Button";
import DisorganizedText from "../../components/DisorganizedText";
import HighlightCard from "../../components/HighlightCard";
import SectionHeader from "../../components/SectionHeader";
import PropTypes from "prop-types";

const Label = ({ forTag, label }) => {
  return (
    <label
      for={forTag}
      className="text-white body-font glowing-text z-10 font-normal"
    >
      {label}
    </label>
  );
};

Label.propTypes = {
  forTag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Input = ({ id, placeholder, inputType, type = "text" }) => {
  return inputType === "textarea" ? (
    <textarea
      id={id}
      placeholder={placeholder}
      required
      className="w-full p-2 border rounded-md resize-none z-10 font-normal"
    />
  ) : (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required
      className="w-full p-2 border rounded-md z-10 font-normal focus:outline-yellow-500"
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  type: PropTypes.string, // Accepts "text", "email", "password", "textarea", etc.
};

const FormField = ({ formField }) => {
  return (
    <div class="flex flex-col mb-6 gap-4">
      <Label forTag={formField.for} label={formField.label} />
      <Input
        inputType={formField.inputType}
        placeholder={formField.placeholder}
        id={formField.for}
      />
    </div>
  );
};

FormField.prototypes = {
  formField: PropTypes.object,
};

const Contact = () => {
  const formFields = [
    {
      id: 1,
      for: "name",
      label: "Name",
      placeholder: "What's your cool name?",
      type: "text",
      inputType: "input",
    },
    {
      id: 2,
      for: "email",
      label: "Email",
      placeholder: "What's your cool email?",
      type: "text",
      inputType: "input",
    },
    {
      id: 3,
      for: "name",
      label: "Name",
      placeholder: "What's your cool name?",
      type: "text",
      inputType: "textarea",
    },
  ];

  return (
    <section className="section-pd relative bg-black h-[100vh] flex items-center">
      <div className="hehe"></div>
      <HighlightCard>
        <div className="flex flex-col md:flex-row gap-48 section-pd-sm">
          <div className="w-[40%]">
            <SectionHeader text="Contact" customClass="justify-start" />
            <DisorganizedText
              text="Want to connect?"
              as="h2"
              customClass="relative glowing-text z-[10] mb-8"
            />
            <p className="relative z-[10] font-normal body-font">
              Get your space suit ready for a fun adventure! We are about to
              blast off with some crazy and exciting ideas for a dream website.
              Buckle up for the ride!
            </p>
          </div>
          <div className="w-1/2">
            <form action="#" class="form">
              <div class="form__wrapper">
                <div class="form__container">
                  {formFields.map((formField) => (
                    <FormField key={formField.id} formField={formField} />
                  ))}

                  <div class="form__group">
                    <a href="mailto:shaillysahayy@gmail.com">
                      <i class="fa-solid fa-envelope"></i>
                      shaillysahayy@gmail.com
                    </a>
                    <Button
                      text="I WILL TALK"
                      shape="round"
                      customClass="z-10"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </HighlightCard>
    </section>
  );
};

export default Contact;
