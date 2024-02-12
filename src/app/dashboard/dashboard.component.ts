import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  expenses= [
    {
        "expense_id": 100,
        "expense_name": "Starbucks",
        "group_id": 10,
        "creator_user_id": 1000,
        "user_type": "payer",
        "expense_total_amount": 2000,
        "amount_payment_status": null,
        "expense_description": "lunch",
        "expense_created_date": null,
        "expense_settled_date": null,
        "expense_users": [
            {
                "expense_users_id": 1000001,
                "expense_id": 100,
                "user_id": 1001,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1001,
                    "user_name": "saurabhchavan30",
                    "user_first_name": "Saurabh",
                    "user_last_name": "Chavan",
                    "user_password": "Saurabh@3",
                    "user_role": "user",
                    "user_contact_number": "7869834513",
                    "user_trust_score": 0
                },
                "transaction": null
            },
            {
                "expense_users_id": 1000000,
                "expense_id": 100,
                "user_id": 1000,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1000,
                    "user_name": "pranaybhosale1124",
                    "user_first_name": "Pranay",
                    "user_last_name": "Bhosale",
                    "user_password": "Pranay@11",
                    "user_role": "user",
                    "user_contact_number": "7208620325",
                    "user_trust_score": 0
                },
                "transaction": null
            },
            {
              "expense_users_id": 1000001,
              "expense_id": 100,
              "user_id": 1001,
              "amount": 1000,
              "transaction_id": null,
              "user": {
                  "user_id": 1001,
                  "user_name": "saurabhchavan30",
                  "user_first_name": "Saurabh",
                  "user_last_name": "Chavan",
                  "user_password": "Saurabh@3",
                  "user_role": "user",
                  "user_contact_number": "7869834513",
                  "user_trust_score": 0
              },
              "transaction": null
          },
          {
              "expense_users_id": 1000000,
              "expense_id": 100,
              "user_id": 1000,
              "amount": 1000,
              "transaction_id": null,
              "user": {
                  "user_id": 1000,
                  "user_name": "pranaybhosale1124",
                  "user_first_name": "Pranay",
                  "user_last_name": "Bhosale",
                  "user_password": "Pranay@11",
                  "user_role": "user",
                  "user_contact_number": "7208620325",
                  "user_trust_score": 0
              },
              "transaction": null
          },
          {
            "expense_users_id": 1000001,
            "expense_id": 100,
            "user_id": 1001,
            "amount": 1000,
            "transaction_id": null,
            "user": {
                "user_id": 1001,
                "user_name": "saurabhchavan30",
                "user_first_name": "Saurabh",
                "user_last_name": "Chavan",
                "user_password": "Saurabh@3",
                "user_role": "user",
                "user_contact_number": "7869834513",
                "user_trust_score": 0
            },
            "transaction": null
        },
        {
            "expense_users_id": 1000000,
            "expense_id": 100,
            "user_id": 1000,
            "amount": 1000,
            "transaction_id": null,
            "user": {
                "user_id": 1000,
                "user_name": "pranaybhosale1124",
                "user_first_name": "Pranay",
                "user_last_name": "Bhosale",
                "user_password": "Pranay@11",
                "user_role": "user",
                "user_contact_number": "7208620325",
                "user_trust_score": 0
            },
            "transaction": null
        }
        ]
    },
    {
        "expense_id": 101,
        "expense_name": "Movie",
        "group_id": 10,
        "creator_user_id": 1000,
        "user_type": "Payer",
        "expense_total_amount": 2000,
        "amount_payment_status": null,
        "expense_description": "movie",
        "expense_created_date": null,
        "expense_settled_date": null,
        "expense_users": [
            {
                "expense_users_id": 1000001,
                "expense_id": 100,
                "user_id": 1001,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1001,
                    "user_name": "saurabhchavan30",
                    "user_first_name": "Saurabh",
                    "user_last_name": "Chavan",
                    "user_password": "Saurabh@3",
                    "user_role": "user",
                    "user_contact_number": "7869834513",
                    "user_trust_score": 0
                },
                "transaction": null
            },
            {
                "expense_users_id": 1000000,
                "expense_id": 100,
                "user_id": 1000,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1000,
                    "user_name": "pranaybhosale1124",
                    "user_first_name": "Pranay",
                    "user_last_name": "Bhosale",
                    "user_password": "Pranay@11",
                    "user_role": "user",
                    "user_contact_number": "7208620325",
                    "user_trust_score": 0
                },
                "transaction": null
            }
        ]
    },
    {
        "expense_id": 100,
        "expense_name": "Starbucks",
        "group_id": 10,
        "creator_user_id": 1000,
        "user_type": "payer",
        "expense_total_amount": 2000,
        "amount_payment_status": null,
        "expense_description": "lunch",
        "expense_created_date": null,
        "expense_settled_date": null,
        "expense_users": [
            {
                "expense_users_id": 1000001,
                "expense_id": 100,
                "user_id": 1001,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1001,
                    "user_name": "saurabhchavan30",
                    "user_first_name": "Saurabh",
                    "user_last_name": "Chavan",
                    "user_password": "Saurabh@3",
                    "user_role": "user",
                    "user_contact_number": "7869834513",
                    "user_trust_score": 0
                },
                "transaction": null
            },
            {
                "expense_users_id": 1000000,
                "expense_id": 100,
                "user_id": 1000,
                "amount": 1000,
                "transaction_id": null,
                "user": {
                    "user_id": 1000,
                    "user_name": "pranaybhosale1124",
                    "user_first_name": "Pranay",
                    "user_last_name": "Bhosale",
                    "user_password": "Pranay@11",
                    "user_role": "user",
                    "user_contact_number": "7208620325",
                    "user_trust_score": 0
                },
                "transaction": null
            }
        ]
    },
]
}
