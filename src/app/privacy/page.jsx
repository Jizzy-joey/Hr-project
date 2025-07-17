import React from 'react';

const PrivacyPolicy = () => (
    <main className='flex flex-col items-center justify-center p-8'>
        <h1 className='text-2xl font-bold mb-4'>Privacy Policy</h1>
        <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Information We Collect</h2>
        <ul>
            <li>Personal identification information (name, email address, etc.)</li>
            <li>Usage data and cookies</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6'>How We Use Your Information</h2>
        <ul>
            <li>To provide and maintain our service</li>
            <li>To improve user experience</li>
            <li>To communicate with you</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6'>Sharing Your Information</h2>
        <p>
            We do not share your personal information with third parties except as required by law or to provide our services.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Security</h2>
        <p>
            We take reasonable measures to protect your information from unauthorized access.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Data Retention</h2>
        <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Your Rights</h2>
        <ul>
            <li>You have the right to access, update, or delete your personal information.</li>
            <li>You may request information about how your data is processed.</li>
            <li>To exercise these rights, please contact us at support@example.com.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6'>Third-Party Links</h2>
        <p>
            Our service may contain links to other websites. We are not responsible for the privacy practices of these sites.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Children's Privacy</h2>
        <p>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Changes to This Policy</h2>
        <p>
            We may update our Privacy Policy from time to time. Changes will be posted on this page.
        </p>

        <h2 className='text-xl font-semibold mt-6'>Contact Us</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact us at support@example.com.
        </p>
    </main>
);

export default PrivacyPolicy;