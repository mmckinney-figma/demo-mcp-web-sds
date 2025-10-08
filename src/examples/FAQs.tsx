import { Flex, Section } from "layout";
import { Accordion, AccordionItem, TextContentHeading } from "primitives";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund, no questions asked.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for delivery within 2-3 business days. International orders may take longer depending on customs processing.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost and estimated delivery time at checkout before completing your purchase.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website for real-time updates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with industry-standard encryption.",
  },
];

export function FAQs() {
  return (
    <Section padding="1600">
      <Flex
        direction="column"
        gap="1200"
        alignSecondary="center"
        alignPrimary="center"
        container
      >
        <TextContentHeading
          align="center"
          heading="Frequently Asked Questions"
          subheading="Find answers to common questions about our products and services"
        />
        <Flex
          direction="column"
          gap="400"
          style={{ maxWidth: "640px", width: "100%" }}
        >
          <Accordion>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Section>
  );
}
