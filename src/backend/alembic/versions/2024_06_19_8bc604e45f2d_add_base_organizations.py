"""Add base Organization tables

Revision ID: 8bc604e45f2d
Revises: 982bbef24559
Create Date: 2024-06-19 16:15:20.386321

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "8bc604e45f2d"
down_revision: Union[str, None] = "982bbef24559"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "organizations",
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "user_organization",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("organization_id", sa.String(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(
            ["organization_id"], ["organizations.id"], ondelete="CASCADE"
        ),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("user_id", "organization_id", "id"),
    )
    op.add_column("agents", sa.Column("organization_id", sa.String(), nullable=True))
    op.create_foreign_key(
        "agents_organization_id_fkey",
        "agents",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="CASCADE",
    )
    op.add_column(
        "conversations", sa.Column("organization_id", sa.String(), nullable=True)
    )
    op.create_foreign_key(
        "conversations_organization_id_fkey",
        "conversations",
        "organizations",
        ["organization_id"],
        ["id"],
        ondelete="CASCADE",
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        "conversations_organization_id_fkey", "conversations", type_="foreignkey"
    )
    op.drop_column("conversations", "organization_id")
    op.drop_constraint("agents_organization_id_fkey", "agents", type_="foreignkey")
    op.drop_column("agents", "organization_id")
    op.drop_table("user_organization")
    op.drop_table("organizations")
    # ### end Alembic commands ###
